import type { ApartmentCardData } from '../types/apartment';

type ApartmentCardProps = { apartment: ApartmentCardData };

export function ApartmentCard({ apartment }: ApartmentCardProps) {
  // Данные квартиры будут отображаться в карточке на уроке 41.
  void apartment;
  return <article />;
}
