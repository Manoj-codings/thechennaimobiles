document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.brand-nav-button');
    const brandSections = document.querySelectorAll('.brand-section');

    const showBrandSection = (brandId) => {
        brandSections.forEach(section => {
            section.classList.add('hidden');
        });

        const targetSection = document.getElementById(`brand-section-${brandId}`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    };

    const setActiveButton = (clickedButton) => {
        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        clickedButton.classList.add('active');
    };

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetBrand = button.dataset.targetBrand;
            setActiveButton(button);
            showBrandSection(targetBrand);
        });
    });

    const initialActiveButton = document.querySelector('.brand-nav-button.active');
     if (initialActiveButton) {
          setTimeout(() => {
               showBrandSection(initialActiveButton.dataset.targetBrand);
          }, 0);
     } else {
          if (navButtons.length > 0 && brandSections.length > 0) {
               setActiveButton(navButtons[0]);
               showBrandSection(navButtons[0].dataset.targetBrand);
          }
     }
});