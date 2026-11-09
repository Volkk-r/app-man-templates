import { ApartmentBasicInfo } from './ApartmentBasicInfo';
import { ApartmentCharacteristics } from './ApartmentCharacteristics';
import { ApartmentImages } from './ApartmentImages';
import { ApartmentAmenities } from './ApartmentAmenities';
import { ApartmentRules } from './ApartmentRules';

export function ApartmentForm() {
  return <form className="form-stack" onSubmit={event => event.preventDefault()}>
    <ApartmentBasicInfo />
    <ApartmentCharacteristics />
    <ApartmentImages />
    <ApartmentAmenities />
    <ApartmentRules />
  </form>;
}
