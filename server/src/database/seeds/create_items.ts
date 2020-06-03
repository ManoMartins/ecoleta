/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

// eslint-disable-next-line import/prefer-default-export
export async function seed(knex: Knex) {
  await knex('items').insert([
    {
      title: 'Lampadas',
      image: 'lampadas.svg',
    },
    {
      title: 'Pilhas e Baterias',
      image: 'pilhas.svg',
    },
    {
      title: 'Papeis e Papelão',
      image: 'papeis-papelao.svg',
    },
    {
      title: 'Residuos Eletronicos',
      image: 'eletronicos.svg',
    },
    {
      title: 'Residuos Organicos',
      image: 'organicos.svg',
    },
    {
      title: 'Oleo de Cozinha',
      image: 'oleo.svg',
    },
  ]);
}
