  const artGallery = JSON.parse(localStorage.getItem('cssArt')) || [];

        document.getElementById('addArt').addEventListener('click', function() {
            const cssCode = document.getElementById('cssArt').value;
            if (cssCode) {
                artGallery.push(cssCode);
                localStorage.setItem('cssArt', JSON.stringify(artGallery));
                document.getElementById('cssArt').value = '';
                displayArt();
            }
        });

        function displayArt() {
            const galleryDiv = document.getElementById('artGallery');
            galleryDiv.innerHTML = '';
            artGallery.forEach(css => {
                const artDiv = document.createElement('div');
                artDiv.className = 'art-box';
                artDiv.style = css;
                galleryDiv.appendChild(artDiv);
            });
        }

        displayArt();