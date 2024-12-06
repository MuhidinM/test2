"use server";

export async function processInput(prevState: any, formData: FormData) {
  const input = formData.get("input") as string;

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    message: input,
  };
}
