import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "./register";

export interface ContactFormData {
  name: string;
  lastName: string;
  email: string;
  message: string;
  timestamp: number;
}

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitContactForm = async (
    data: Omit<ContactFormData, "timestamp">
  ) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const contactsRef = ref(database, "contacts");
      const contactData: ContactFormData = {
        ...data,
        timestamp: Date.now(),
      };

      await push(contactsRef, contactData);
      setSuccess(true);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit form");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setError(null);
  };

  return {
    submitContactForm,
    loading,
    error,
    success,
    resetForm,
  };
}
