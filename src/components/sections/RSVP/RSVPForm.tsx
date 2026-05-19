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
      proteins: [],
      song: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

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
