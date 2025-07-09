import React from "react";

export default function EventInfo() {
  return (
    <section className="py-8 bg-secondary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl mb-2">예식 안내</h2>
        <p className="mb-1">2026년 3월 21일 토요일 오후 1시 30분</p>
        <p className="mb-2">더살롱드웨딩홀 1층 레터홀</p>
        <div className="overflow-x-auto my-4">
          <table className="mx-auto border-collapse text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-2 py-1">일</th>
                <th className="px-2 py-1">월</th>
                <th className="px-2 py-1">화</th>
                <th className="px-2 py-1">수</th>
                <th className="px-2 py-1">목</th>
                <th className="px-2 py-1">금</th>
                <th className="px-2 py-1">토</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
              <tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr>
              <tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td className="bg-accent font-bold">21<br/><span className="text-xs">오후1:30</span></td></tr>
              <tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr>
              <tr><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
        <a href="https://goo.gl/maps/xyz123" target="_blank" rel="noopener noreferrer" className="text-accent underline">구글 지도에서 보기</a>
        <div className="mt-4 text-sm text-gray-700">
          <p>예식장은 주차장이 협소합니다. 주차안내 요원의 안내를 받아 야외주차장에 주차하시고 셔틀버스를 이용해주세요.</p>
          <p>🚌 셔틀버스 운행간격: 5분</p>
        </div>
      </div>
    </section>
  );
} 