/* bugSolution.js */
export async function getStaticProps() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        error: 'Failed to fetch data. Please try again later.',
        data: [] // or a default data structure
      },
    };
  }
}

export default function MyComponent({ data, error }) {
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
} 