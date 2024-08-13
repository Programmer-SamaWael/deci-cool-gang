document.addEventListener('DOMContentLoaded', () => {
    const hidePreloader = () => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    };

    setTimeout(hidePreloader, 3000); // Adjust the delay as needed
});
