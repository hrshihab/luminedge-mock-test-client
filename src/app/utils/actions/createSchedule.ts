'use server'
export const createSchedule = async (formData: FormData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/create-schedule`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        cache: 'no-store',
    })
    const data = await res.json()
    return data
}

export default createSchedule;

