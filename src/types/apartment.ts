export type Status = 'draft' | 'published' | 'archived';
export type Photo = { id: number; url: string; isCover: boolean };
export type Rules = { checkIn: string; checkOut: string; smokingAllowed: boolean; petsAllowed: boolean; childrenAllowed: boolean };
export type ApartmentData = { title: string; description: string; city: string; address: string; pricePerNight: number | null; maxGuests: number | null; rooms: number | null; beds: number | null; bathrooms: number | null; area: number | null; floor: number | null; amenities: string[]; rules: Rules };
export type Apartment = ApartmentData & { id: number; ownerId: number; images: Photo[]; status: Status; createdAt: string; updatedAt: string };
export type ApartmentCardData = Pick<Apartment, 'id' | 'title' | 'city' | 'address' | 'pricePerNight' | 'status' | 'updatedAt'> & { coverImage: Photo | null };

// Дополнительные имена типов для работы с моделью квартиры.
export type ApartmentStatus = Status;
export type ApartmentImage = Photo;
export type ApartmentRules = Rules;
