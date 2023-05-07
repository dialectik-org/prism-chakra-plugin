// @ts-ignore
import { Card, useClipboard, Button } from '@chakra-ui/react'

// @ts-ignore
import React from 'react';

import './css/prism-night-owl.css'
import './css/prism-one-light.css'
import './css/prism-plus.css'
import './css/reset-prism.css'

interface CodeProps {
  code : string,
  children: any,
  lang ?: string,
  meta ?: string,
}

export const CodeFrame = ({ code, children, lang, meta } : CodeProps) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard(code);
  return (
  <Card mb='1.25rem' borderRadius='4px'>
      {children}
      <Button
        position='absolute'
        right={4}
        top={4}
        onClick={onCopy}
      >{hasCopied ? "Copied!" : "Copy"}
      </Button>
  </Card>)
}

export const getComponents = () => {
  return {
    codeframe: (props: any) => <CodeFrame
      code={props.code}
      children={props.children}
      lang={props.lang}
      meta={props.meta}
    />
  }
}
