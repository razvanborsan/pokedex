export default function hasSprites(val) {
  return val.back_default
|| val.back_gray
|| val.back_transparent
|| val.front_default
|| val.front_gray
|| val.front_transparent
|| val.front_shiny
|| val.back_shiny
|| val.back_female
|| val.front_female
|| val.back_shiny_female
|| val.front_shiny_female;
}
