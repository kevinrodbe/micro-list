import { useEffect, useState } from 'react';

import { emitEvent } from '@cande/utils';
import { Nav, Ul, A } from './Header.styles';
import { useLookupContext } from '../../context/LookupContext';

export const Header = () => {
  const [lang, setLang] = useState();
  const { languages } = useLookupContext();
  const changeLang = (language) => {
    setLang(language);
    emitEvent('@cande/header/change-lang', language);
  };

  useEffect(() => {
    changeLang(languages.default);
  }, []);

  return (
    <Nav>
      <Ul>
        <li>
          <A selected={languages.es.value === lang} onClick={() => changeLang(languages.es.value)}>
            {languages.es.label}
          </A>
        </li>
        <li>
          <A selected={languages.en.value === lang} onClick={() => changeLang(languages.en.value)}>
            {languages.en.label}
          </A>
        </li>
      </Ul>
    </Nav>
  );
};
