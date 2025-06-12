window.visualViewport.addEventListener('resize',()=> {
    const activeElement = document.activeElement;
    if (activeElement && ['INPUT','TEXTAREA'].includes(activeElement.tagName)) {
        activeElement.scrollIntoView({behavior: 'smooth',block:'center'});
    }
});