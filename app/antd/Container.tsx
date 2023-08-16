'use client'

import { Button } from 'antd'

interface ContainerProps {
  data: any
}

const Container: React.FC<ContainerProps> = ({ data }) => {
  return (
    <>
      <Button type="primary" size="large" className="m-4">
        你好{data.id}
      </Button>
    </>
  )
}

export default Container
