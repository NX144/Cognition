export default function scroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        // Получаем целевой элемент по атрибуту href
        const targetId = anchor.getAttribute('href');
        const targetElement = document.getElementById(`${targetId.replace("#", "")}`)

        // Если элемент найден, осуществляем плавную прокрутку
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Параметр для плавной прокрутки
                block: 'start'     // Опционально: выравнивание по верху
            });
        }
    });
});
}