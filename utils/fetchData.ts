interface Props {
  endpoint: string;
  options?: RequestInit;
}

export async function fetchData<T>({ endpoint, options }: Props) {
  try {
    const res = await fetch(`https://api.airsyst.kz/${endpoint}`, options);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const resData = (await res.json()) as T;
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
}
