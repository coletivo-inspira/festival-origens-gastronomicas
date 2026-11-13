export interface Show { time: string; title: string; kind: 'show' | 'info'; headliner?: boolean }
export interface ScheduleDay { id: string; label: string; date: string; shows: Show[] }

export const schedule: ScheduleDay[] = [
  {
    id: 'sex', label: 'Sexta', date: '13/11',
    shows: [
      { time: '17h00', title: 'Abertura do evento', kind: 'info' },
      { time: '17h30', title: 'DJ', kind: 'show' },
      { time: '19h40', title: 'Locomotiva Rock', kind: 'show', headliner: true },
      { time: '23h00', title: 'Encerramento do evento', kind: 'info' },
    ],
  },
  {
    id: 'sab', label: 'Sábado', date: '14/11',
    shows: [
      { time: '12h00', title: 'Abertura do evento', kind: 'info' },
      { time: '13h00', title: 'Dom Preto', kind: 'show' },
      { time: '15h30', title: 'Like Five', kind: 'show' },
      { time: '18h00', title: 'Vitória Pinheiro', kind: 'show' },
      { time: '20h00', title: 'Gabi Soares', kind: 'show', headliner: true },
      { time: '23h30', title: 'Encerramento do evento', kind: 'info' },
    ],
  },
  {
    id: 'dom', label: 'Domingo', date: '15/11',
    shows: [
      { time: '10h00', title: 'Abertura do evento', kind: 'info' },
      { time: '11h00', title: 'Ângelo Reis', kind: 'show' },
      { time: '13h30', title: 'Banda Bullets', kind: 'show' },
      { time: '16h00', title: 'Velotrol', kind: 'show', headliner: true },
      { time: '19h30', title: 'Carol Rodrigues', kind: 'show' },
      { time: '21h00', title: 'Encerramento do evento', kind: 'info' },
    ],
  },
];
