"use client";

import { useState, useTransition } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fleuron } from "@/components/ui/Fleuron";
import { submitRsvp } from "@/lib/actions/rsvp";
import {
  rsvpSchema,
  type RsvpInput,
} from "@/lib/actions/rsvpSchema";
import styles from "./RSVP.module.scss";

type AttendingOption = {
  value: RsvpInput["attending"];
  numeral: string;
  label: string;
};

const ATTENDING_OPTIONS: AttendingOption[] = [
  { value: "yes", numeral: "i.", label: "Yes, of course" },
  { value: "maybe", numeral: "ii.", label: "Trying my best" },
  { value: "no", numeral: "iii.", label: "Can’t this time" },
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
      diet: "",
      song: "",
      message: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const attending = useWatch({ control, name: "attending" });

  const onSubmit = handleSubmit((data) => {
    setFormError(null);
    startTransition(async () => {
      const result = await submitRsvp(data);
      if (result.ok) {
        setSubmitted(true);
      } else {
        setFormError(
          result.formError ?? "Something went wrong — try again in a moment.",
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
          Your Name
        </label>
        <input
          id="rsvp-name"
          type="text"
          autoComplete="name"
          placeholder="The one we use, not the one on your passport"
          aria-invalid={errors.name ? true : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p className={styles.fieldError}>{errors.name.message}</p>
        )}
      </div>

      <fieldset className={styles.field}>
        <legend className={styles.label}>Will you be there?</legend>
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

      <div className={styles.field}>
        <label className={styles.label} htmlFor="rsvp-diet">
          Allergies or things you don’t eat
        </label>
        <input
          id="rsvp-diet"
          type="text"
          placeholder="Be honest — I’d rather know."
          {...register("diet")}
        />
        {errors.diet && (
          <p className={styles.fieldError}>{errors.diet.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="rsvp-song">
          One song for the playlist
        </label>
        <input
          id="rsvp-song"
          type="text"
          placeholder="The one that takes you back to us."
          {...register("song")}
        />
        {errors.song && (
          <p className={styles.fieldError}>{errors.song.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="rsvp-message">
          A note for the group
        </label>
        <textarea
          id="rsvp-message"
          placeholder="Anything you want us to know before the night."
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
        {isPending ? "Sending…" : submitLabel}{" "}
        <span className={styles.arrow}>→</span>
      </button>
    </form>
  );
}
