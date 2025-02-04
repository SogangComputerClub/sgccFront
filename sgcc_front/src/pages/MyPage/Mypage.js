import React,{useState} from 'react';
import './Mypage.css';

function Mypage(){
    const [formData,setFormData]=useState({
        name:'스그스스',
        email:'sgccofficial2024@gmail.com',
        id:'sgccofficial',
        password:'1111',
    });

    const [editMode,setEditMode] = useState(false);
    const handleChange = (e) => {
        const {name,vaule} = e.target;
        setFormData({
            ...formData,
            [name]: vaule,
        });
    };

    const handleUpdate = () =>{

    };

    const togleEditMode = () => {
        if (editMode){
            handleUpdate();
        }
        setEditMode(!editMode);
    }
}

return(
    <div className = "Mypage">
        <form>
            {Object.keys(formData).map((field)=>( //괄호 안 객체의 키들을 배열로 반환함 - map():배열을 순회하면서 각 필드에 대한 폼을 동적으로 생성함
                <div className='form-group' key={field}>
                    <label htmlFor={field}>{/*label: 입력필드와 연결된 텍스트 설명 & htmlfor~: 이 label이 어떤 input과 연결되는가 */}
                        {field ==='name' && '이름'}{/*name인풋에 이름이라는 라벨(텍스트 설명)이 연결된다 */}
                        {field ==='email' && '이메일'}
                        {field ==='id'&&'아이디'}
                        {field==='password'&&'비밀번호'}
                    </label>
                    <input
                        type={field === 'password' ? 'password' : 'text'} //타입이 password인 경우 입력 내용이 검은 동그라미로 표시됨
                        id={field}//id: html요소의 고유한 식별자; 이 경우 label의 htmlFor과 연결하기 위해 필요 - label 클릭시 해당 입력 필드로 커서가 이동하는 기능 제공
                        name={field}//handleChange함수에서 어떤 필드인지 식별하는데 사용(e.target.name임)
                        value={formData[field]}//formData객체에서 해당 필드의 값을 가져옴
                        onChange={handleChange}
                        disabled={!editMode}
                    />
                </div>
            ))}
                        <button type="button" onClick={toggleEditMode} className="edit-save-button">
                        {editMode ? '저장하기' : '수정하기'}
                      </button>
                    </form>
        
    </div>
)
export default Mypage;