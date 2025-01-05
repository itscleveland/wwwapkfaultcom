 // Function to switch to desktop view
        function switchToDesktopView() {
            const viewportMetaTag = document.querySelector('meta[name="viewport"]');
            if (viewportMetaTag) {
                viewportMetaTag.setAttribute('content', 'width=1024'); // Change width to a fixed value
            }
            location.reload(); // Reload to apply the changes
        }