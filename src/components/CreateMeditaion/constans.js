export const steps = ['Czas', 'Dwięk', 'Elementy', 'Głos lektora'];
export const stepsTails = [
  [
    { label: '4 minuty', value: 4, type: 'time' },
    { label: '20 minut', value: 20, type: 'time' },
    { label: '40 minut', value: 40, type: 'time' },
  ],
  [
    { label: 'Las', value: 'Dzungla', type: 'background', icon: true },
    { label: 'Fale', value: 'Fale', type: 'background', icon: true },
    { label: 'Cisza', value: 'Cisza', type: 'background' },
  ],
  [
    { label: 'Wstęp', type: 'beginning', icon: true },
    { label: 'Prowadzenie', type: 'leading', icon: true },
    { label: 'Zakończenie', type: 'ending', icon: true },
    { label: 'Pomiń', type: 'no-voice' },
  ],
  [
    { label: 'Ania', value: 'Ania', type: 'voice', icon: true },
    { label: 'Wojtek', value: 'Wojtek', type: 'voice', icon: true },
    { label: 'Karolina', value: 'Brak', type: 'voice', icon: true },
  ],
];

export const titles = [
  'Rozpocznij od wybrania czasu trwania:',
  `Następnie dobierz (lub nie!)
  dźwięk towarzyszący:`,
  'Wybierz elementy prowadzenia medytacji',
  `Wybierz głos, który poprowadzi
  Cię  przez medytację:`,
];
