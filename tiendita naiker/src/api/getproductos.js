const API_URL = 'http://localhost:8080';

export const getProductos = async () => {
  try {
    const response = await fetch(`${API_URL}/productos`);
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};
