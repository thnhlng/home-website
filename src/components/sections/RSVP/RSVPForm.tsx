"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fleuron } from "@/components/ui/Fleuron";
import { submitRsvp } from "@/lib/actions/rsvp";
import { rsvpSchema, type RsvpInput } from "@/lib/actions/rsvpSchema";

import styles from "./RSVP.module.scss";

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
    reset,
    formState: { errors },
  } = useForm<RsvpInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      song: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = handleSubmit((data) => {
    setFormError(null);
    startTransition(async () => {
      const result = await submitRsvp(data);
      if (result.ok) {
        setSubmitted(true);
      } else {
        setFormError(
          result.formError ?? "Etwas ist schiefgelaufen. Versuch es gleich noch einmal.",
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
        <label className={styles.label} htmlFor="rsvp-song">
          Ein Song für unsere Playlist
        </label>
        <input
          id="rsvp-song"
          type="text"
          placeholder="Künstler – Song (e.g. ABBA – Dancing Queen)"
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
