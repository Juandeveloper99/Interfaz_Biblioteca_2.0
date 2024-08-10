export async function fetchLibros() {
    const response = await fetch('http://localhost:3000/api/libros');
    const data = await response.json();
    return data;
  }
  