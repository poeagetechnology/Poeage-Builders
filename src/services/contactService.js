import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export async function submitContactForm(formData) {
  await addDoc(collection(db, "contact_submissions"), {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || "",
    projectType: formData.projectType || "",
    budget: formData.budget || "",
    message: formData.message,
    website: "Poeage Builders",
    isRead: false,
    createdAt: serverTimestamp(),
  });
}
