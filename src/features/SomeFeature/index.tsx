import { Fragment } from 'react'

import { SomeTag } from './styled'

type TSomeFeature = {
  someProp: string,
}

// TODO: УДалить компонент, он для примера, br это временное решение
// Тудушки не всегда обязательно выполнять, это как пометки себе на будущее
// и на дни рефакторинга
export const SomeFeature = ({ someProp }: TSomeFeature) => (
  <Fragment>
    <br />
    SomeFeature <br />
    <SomeTag>
      { someProp }
    </SomeTag>
  </Fragment>
)
