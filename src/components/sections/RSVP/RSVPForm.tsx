"use client";

import { useState, useTransition } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fleuron } from "@/components/ui/Fleuron";
import { submitRsvp } from "@/lib/actions/rsvp";
import {
  rsvpSchema,
  PROTEIN_VALUES,
  type RsvpInput,
} from "@/lib/actions/rsvpSchema";

type ProteinValue = (typeof PROTEIN_VALUES)[number];
import styles from "./RSVP.module.scss";

type AttendingOption = {
  value: RsvpInput["attending"];
  numeral: string;
  label: string;
};

const ATTENDING_OPTIONS: AttendingOption[] = [
  { value: "yes", numeral: "i.", label: "Ja, natürlich" },
  { value: "maybe", numeral: "ii.", label: "Ich gebe mein Bestes" },
  { value: "no", numeral: "iii.", label: "Diesmal leider nicht" },
];

type ProteinOption = {
  value: ProteinValue;
  label: string;
};

const PROTEIN_OPTIONS: ProteinOption[] = [
  { value: "pork", label: "Schwein" },
  { value: "beef", label: "Rind" },
  { value: "chicken", label: "Hähnchen" },
  { value: "shrimp", label: "Garnele" },
];

type Props = {
  thanksHeadlineLead: string;
  thanksHeadlineAccent: string;
  thanksMessage: string;
  editLabel: string;
  submitLabel: string;
};

export function RSVPForm({
  thanksHeadlineLead,
  thanksHeadlineAccent,
  thanksMessage,
  editLabel,
  submitLabel,
}: Props) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RsvpInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      attending: "yes",
      proteins: [],
      diet: "",
      song: "",
      message: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const attending = useWatch({ control, name: "attending" });
  const proteins = useWatch({ control, name: "proteins" }) ?? [];

  const onSubmit = handleSubmit((data) => {
    setFormError(null);
    startTransition(async () => {
      const result = await submitRsvp(data);
      if (result.ok) {
        setSubmitted(true);
      } else {
        setFormError(
          result.formError ?? "Etwas ist schiefgelaufen — versuch es gleich noch einmal.",
        );
      }
    });
  });

  if (submitted) {
    return (
      <div className={styles.form}>
        <div className={styles.thanks}>
          <Fleuron />
          <h3 className={styles.thanksHeadline}>
            {thanksHeadlineLead}{" "}
            <em className={styles.thanksAccent}>{thanksHeadlineAccent}</em>
          </h3>
          <p className={styles.thanksMessage}>{thanksMessage}</p>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnGhost}`}
            onClick={() => {
              setSubmitted(false);
              reset(undefined, { keepValues: true });
            }}
          >
            {editLabel} <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="rsvp-name">
          Dein Name
        </label>
        <input
          id="rsvp-name"
          type="text"
          autoComplete="name"
          placeholder="Der, den wir benutzen, nicht der im Pass"
          aria-invalid={errors.name ? true : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p className={styles.fieldError}>{errors.name.message}</p>
        )}
      </div>

      <fieldset className={styles.field}>
        <legend className={styles.label}>Bist du dabei?</legend>
        <div className={styles.radioRow} role="radiogroup">
          {ATTENDING_OPTIONS.map((opt) => {
            const active = attending === opt.value;
            return (
              <label
                key={opt.value}
                className={
                  active ? `${styles.chip} ${styles.chipActive}` : styles.chip
                }
              >
                <input
                  type="radio"
                  value={opt.value}
                  className={styles.chipInput}
                  {...register("attending")}
                />
                <span className={styles.chipEm}>{opt.numeral}</span>
                {opt.label}
              </label>
            );
          })}
        </div>
        {errors.attending && (
          <p className={styles.fieldError}>{errors.attending.message}</p>
        )}
      </fieldset>

      <fieldset className={styles.field}>
        <legend className={styles.label}>
          Was möchtest du essen{" "}
          <span className={styles.labelHint}>(mehrere möglich)</span>
        </legend>
        <div className={styles.chipsRow}>
          {PROTEIN_OPTIONS.map((opt) => {
            const active = proteins.includes(opt.value);
            return (
              <label
                key={opt.value}
                className={
                  active ? `${styles.chip} ${styles.chipActive}` : styles.chip
                }
              >
                <input
                  type="checkbox"
                  value={opt.value}
                  className={styles.chipInput}
                  {...register("proteins")}
                />
                {opt.label}
              </label>
            );
          })}
        </div>
        {errors.proteins && (
          <p className={styles.fieldError}>{errors.proteins.message}</p>
        )}
      </fieldset>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="rsvp-diet">
          Allergien oder Dinge, die du nicht isst
        </label>
        <input
          id="rsvp-diet"
          type="text"
          placeholder="Sei ehrlich — ich will’s lieber wissen."
          {...register("diet")}
        />
        {errors.diet && (
          <p className={styles.fieldError}>{errors.diet.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="rsvp-song">
          Ein Song für die Playlist
        </label>
        <input
          id="rsvp-song"
          type="text"
          placeholder="Der, der dich zu uns zurückbringt."
          {...register("song")}
        />
        {errors.song && (
          <p className={styles.fieldError}>{errors.song.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="rsvp-message">
          Eine Nachricht an die Gruppe
        </label>
        <textarea
          id="rsvp-message"
          placeholder="Alles, was wir vor dem Abend wissen sollten."
          {...register("message")}
        />
        {errors.message && (
          <p className={styles.fieldError}>{errors.message.message}</p>
        )}
      </div>

      {formError && (
        <p className={styles.formError} role="alert">
          {formError}
        </p>
      )}

      <button
        type="submit"
        className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSubmit}`}
        disabled={isPending}
      >
        {isPending ? "Wird gesendet…" : submitLabel}{" "}
        <span className={styles.arrow}>→</span>
      </button>
    </form>
  );
}
