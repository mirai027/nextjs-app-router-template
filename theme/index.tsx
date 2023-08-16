import React from 'react'
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

const withTheme = (node: JSX.Element) => (
  <StyleProvider
    hashPriority="high"
    transformers={[legacyLogicalPropertiesTransformer]}
  >
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#5436ff',
        },
      }}
    >
      {node}
    </ConfigProvider>
  </StyleProvider>
)

export default withTheme
