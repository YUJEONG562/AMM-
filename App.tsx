
import React, { useState, useEffect } from 'react';
import { STEPS_CONFIG } from './constants';
import StepBox from './components/StepBox';

const App: React.FC = () => {
  const [data, setData] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem('amm_sheet_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('amm_sheet_data', JSON.stringify(data));
  }, [data]);

  const handleChange = (id: number, value: string) => {
    setData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const clearAll = () => {
    if (window.confirm('모든 내용을 삭제하시겠습니까?')) {
      setData({});
    }
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AMM_Search_Sheet_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const printSheet = () => {
    window.print();
  };

  return (
    <div className="main-container max-w-[1400px] mx-auto p-6 md:p-10">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 no-print gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter">
            AMM 커리어 검색시트
          </h1>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            작성하신 내용은 브라우저에 실시간으로 안전하게 저장됩니다.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={printSheet}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md font-bold flex items-center gap-2 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
            </svg>
            PDF로 저장 / 인쇄
          </button>
          <button 
            onClick={exportData}
            className="px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-black transition-all shadow-md font-bold flex items-center gap-2 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            데이터 백업
          </button>
          <button 
            onClick={clearAll}
            className="px-5 py-2.5 border border-red-100 text-red-500 rounded-xl hover:bg-red-50 transition-colors font-bold text-sm"
          >
            내용 지우기
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-5 auto-rows-auto">
        
        {/* Step 1 & 11 (Top row) */}
        <div className="col-span-12 md:col-span-3">
          <StepBox 
            {...STEPS_CONFIG[1]} 
            value={data[1] || ''} 
            onChange={handleChange}
            className="h-full"
            rows={2}
          />
        </div>

        <div className="col-span-12 md:col-span-9">
          <StepBox 
            {...STEPS_CONFIG[11]} 
            value={data[11] || ''} 
            onChange={handleChange}
            className="h-full ring-2 ring-blue-100"
            rows={4}
          />
        </div>

        {/* Middle Body */}
        
        {/* Step 3 (Left Column) */}
        <div className="col-span-12 md:col-span-3">
          <StepBox 
            {...STEPS_CONFIG[3]} 
            value={data[3] || ''} 
            onChange={handleChange}
            className="h-full min-h-[500px]"
            rows={20}
          />
        </div>

        {/* Center Grid (3x2 format) */}
        <div className="col-span-12 md:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white border-2 border-dashed border-gray-200 rounded-3xl shadow-sm">
          {/* Top Row: 8, 9, 10 */}
          <StepBox {...STEPS_CONFIG[8]} value={data[8] || ''} onChange={handleChange} rows={10} />
          <StepBox {...STEPS_CONFIG[9]} value={data[9] || ''} onChange={handleChange} rows={10} />
          <StepBox {...STEPS_CONFIG[10]} value={data[10] || ''} onChange={handleChange} rows={10} />
          
          {/* Bottom Row: 4, 5, 6 */}
          <StepBox {...STEPS_CONFIG[4]} value={data[4] || ''} onChange={handleChange} rows={10} />
          <StepBox {...STEPS_CONFIG[5]} value={data[5] || ''} onChange={handleChange} className="ring-2 ring-blue-50" rows={12} />
          <StepBox {...STEPS_CONFIG[6]} value={data[6] || ''} onChange={handleChange} rows={10} />
        </div>

        {/* Right Sidebar (Steps 2, 7) */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
          <StepBox 
            {...STEPS_CONFIG[2]} 
            value={data[2] || ''} 
            onChange={handleChange}
            className="flex-grow"
            rows={12}
          />
          <StepBox 
            {...STEPS_CONFIG[7]} 
            value={data[7] || ''} 
            onChange={handleChange}
            rows={8}
          />
        </div>

      </div>

      <footer className="mt-16 pb-10 text-center text-gray-400 text-xs no-print font-medium">
        &copy; {new Date().getFullYear()} AMM Search Sheet. 모든 권리 보유.
      </footer>
    </div>
  );
};

export default App;
