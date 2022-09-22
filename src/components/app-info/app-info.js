import './app-info.css';

const AppInfo = function ({staff, prize}){
   return (
      <div className="app-info">
         <h1>Учет сотрудников в компании</h1>
         <h2>Общее число сотрудников: {staff}</h2>
         <h2>Премию получат: {prize}</h2>
      </div>
   )
};

export default AppInfo;