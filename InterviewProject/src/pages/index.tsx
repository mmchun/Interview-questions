import React, { useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import styles from './index.less';
import { connect } from 'umi';

const IndexPage: React.FC = (props) => {

  const [inputValue, setInputValue] = useState({ value: '' });
  const onButtonSave = () => {
    let menuData = JSON.parse(sessionStorage.getItem('menuData'));
    menuData.map((item) => {
      if (item.path == props.location.pathname) {
        item.label = inputValue.value
      } else if (!!item.children && item.children.length > 0) {
        item.children.map((items) => {
          if (items.path == props.location.pathname) {
            items.label = inputValue.value
          }
        })
      }
    })

    sessionStorage.setItem('menuData', JSON.stringify(menuData));
    props.dispatch({
      type: 'global/query',
      payload: {
        name: props.global.name + 1
      }
    }).then((res) => {
      setInputValue({ value: '' })
    })
  }
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>


      <div>
        <Input style={{ width: 200, height: 30 }} value={inputValue.value}
          onChange={(e) => {
            setInputValue({ value: e.target.value })
          }} />
        <Button onClick={onButtonSave}>保存</Button>
      </div>
    </div>
  )
}
export default connect(({ global }: any) => ({
  global
}))(IndexPage);