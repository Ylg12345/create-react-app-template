import { useState } from 'react'


interface IProps {
  name: string;
}

interface IState {
  list: number[];
}

const List: React.FC<IProps> = ({ name }) => {

  const [state, setState] = useState<IState>({
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  })

  const deleteList = (index: number) => {
    setState({
      list: state.list.filter((_, i: number) => i !== index ),
    })
  }

  return (
    <div className="App">
      <h1>Hooks组件{name}</h1>
      <ul>
        {
          state.list.map((item: number, index: number) => {
            return (
              <li 
                key={index}  
              >
                <button onClick={() => {deleteList(index)}}>删除</button>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default List;
