'use server'; //because Next.js needs to know that it should run on the server when the form is submitted.
 
export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      };
      // Test it out:
      console.log("Test it out:--------", rawFormData);
}

