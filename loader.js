// Loader script para abrir about:blank con CDN
(function() {
    'use strict';
    
    // Esperar a que el DOM esté listo
    document.addEventListener('DOMContentLoaded', function() {
        // Abrir otro about:blank con tu CDN
        setTimeout(function() {
            const newWindow = window.open('about:blank', '_self');
            if (newWindow) {
                newWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Tu CDN</title>
                        <style>
                            body { 
                                margin: 0; 
                                padding: 0; 
                                display: flex; 
                                justify-content: center; 
                                align-items: center; 
                                height: 100vh; 
                                background: #000; 
                                font-family: Arial, sans-serif;
                            }
                            .container {
                                text-align: center;
                                color: #00d2ff;
                            }
                            .loader {
                                width: 50px;
                                height: 50px;
                                border: 5px solid #111;
                                border-top-color: #00d2ff;
                                border-radius: 50%;
                                animation: spin 1s linear infinite;
                                margin: 20px auto;
                            }
                            @keyframes spin {
                                to { transform: rotate(360deg); }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="loader"></div>
                            <p>Cargando CDN...</p>
                        </div>
                        <script>
                            // Cargar tu CDN aquí
                            // Reemplaza esta URL con tu CDN real
                            fetch('https://raw.githack.com/derekonsio1023-gif/Ultron-games/main/Ultron_3_2_1.html')
                                .then(response => response.text())
                                .then(html => {
                                    document.body.innerHTML = html;
                                })
                                .catch(error => {
                                    console.error('Error cargando CDN:', error);
                                    document.body.innerHTML = '<p style="color: red;">Error cargando contenido</p>';
                                });
                        <\/script>
                    </body>
                    </html>
                `);
            }
        }, 100);
    });
})();
