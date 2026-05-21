import dayjs from 'dayjs';
const formularz = document.getElementById('formularz')
const komunikat = document.getElementById('komunikat')
const d = document.getElementById('d')
formularz.addEventListener("submit", (event) => {
  event.preventDefault();
  const dziś = dayjs();
  const urodziny = document.getElementById('urodziny').value;
  const urodzinydjs = dayjs(urodziny);
  const różnica = dziś.diff(urodzinydjs, 'day');
  komunikat.innerText = `Od Twoich urodzin minęło: ${różnica} dni.`;
  d.showModal();
    }
  );
  const close = document.getElementById('close')
  close.addEventListener('click', () => {
  d.close();
  }
);