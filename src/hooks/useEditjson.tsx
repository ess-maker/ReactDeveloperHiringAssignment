const useEditjson = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:3000/courses/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ Enrolled: true })
        });
    
        const data = await response.json();
        console.log('Element updated:', data);
      } catch (error) {
        console.error('Error updating element:', error);
      }
  return false
}

export default useEditjson