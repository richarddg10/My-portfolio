import './SkillContainer.css'

export const initializeBrilloEffect = (element) => {
    const handleMouseMove = (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;
        const { offsetWidth: width, offsetHeight: height } = element;

        const x = (mouseX / window.innerWidth) * 100;
        const y = (mouseY / window.innerHeight) * 100;

        element.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 0, 0, 0.5), transparent 100%)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
};
