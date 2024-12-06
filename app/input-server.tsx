"use server";

export async function processInput(input: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return input;
}
