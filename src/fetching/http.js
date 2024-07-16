
export const HTTP = {
  GET: async (url, headers) => {
      const response = await fetch(url, {
          method: 'GET',
          headers: headers
      });
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json();
      } else {
          const text = await response.text();
          throw new Error(`Expected JSON, got ${contentType}: ${text}`);
      }
  },
  POST: async (url, body) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return response;
    } else {
        const text = await response.text();
        throw new Error(`Expected JSON, got ${contentType}: ${text}`);
    }
},    
    PUT: async (url, { titulo, precio }) =>{
        try {
            const response = await fetch(url, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ titulo, precio })
            });
            const data = await response.json();
            if (response.ok) {
              setMessage(data.message);
            } else {
              setMessage(data.message || 'Error actualizando el producto');
            }
          } catch (error) {
            setMessage('Error actualizando el producto');
          }
    },
    DELETE: () =>{
    
    }
}

export const URLS = {
    URL_API: 'https://back-end-final-utn.vercel.app'
}
