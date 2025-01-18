function switchToDesktopView() {
    const viewportMetaTag = document.querySelector('meta[name="viewport"]');
    
    if (viewportMetaTag) {
        // Adjust viewport for desktop without reloading
        viewportMetaTag.setAttribute('content', 'width=1024, initial-scale=1');
    }
    
    // Optionally toggle body or element classes to trigger CSS changes
    document.body.classList.add('desktop-view');
    document.body.classList.remove('mobile-view');
}
