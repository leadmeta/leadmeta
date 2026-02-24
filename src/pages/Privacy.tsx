export default function Privacy() {
    return (
        <>
            <section className="pt-32 pb-12 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">Legal</span>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4 mb-4">개인정보처리방침</h1>
                    <p className="text-slate-500 text-sm">최종 수정일: 2026년 2월 24일</p>
                </div>
            </section>

            <div className="section-divider" />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제1조 (개인정보의 처리 목적)</h2>
                            <p className="mb-3 text-slate-400">"리드메타"(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                <li>서비스 제공 및 계약 이행: 마케팅 대행 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증 등</li>
                                <li>고객 상담 및 관리: 이용자 식별, 문의사항 응대, 공지사항 전달 등</li>
                                <li>마케팅 및 광고에의 활용: 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 등</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제2조 (개인정보의 처리 및 보유 기간)</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>회사는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</li>
                                <li>각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                                    <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                                        <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                                        <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                                        <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                                        <li>웹사이트 방문 기록: 3개월</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제3조 (처리하는 개인정보의 항목)</h2>
                            <p className="mb-3 text-slate-400">회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                <li><strong className="text-slate-200">수집 항목:</strong> 성명, 이메일 주소, 회사명, 연락처 (문의 시)</li>
                                <li><strong className="text-slate-200">인터넷 서비스 이용 과정에서 자동 수집 항기:</strong> IP주소, 쿠키, MAC주소, 서비스 이용 기록, 방문 기록, 불량 이용 기록 등</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제4조 (개인정보의 파기절차 및 파기방법)</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</li>
                                <li>파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제5조 (이용자의 권리·의무 및 그 행사방법)</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>이용자는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</li>
                                <li>제1항에 따른 권리 행사는 회사에 대해 서면, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제6조 (개인정보의 안전성 확보 조치)</h2>
                            <p className="text-slate-400">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400 mt-2">
                                <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                                <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접속기록의 보관, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                                <li>물리적 조치: 개인정보가 포함된 서류, 보관매체의 안전한 보관 및 잠금장치 사용</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제7조 (개인정보 보호책임자)</h2>
                            <div className="glass-card p-6 mt-3">
                                <p className="text-slate-300">
                                    회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                                </p>
                                <div className="mt-4 space-y-1 text-slate-400">
                                    <p><strong className="text-white">개인정보 보호책임자:</strong> 관리팀장</p>
                                    <p><strong className="text-white">이메일:</strong> privacy@leadmeta.xyz</p>
                                    <p><strong className="text-white">문의:</strong> 홈페이지 내 고객 문의 섹션</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <p className="text-slate-500">
                                공고일자: 2026년 2월 24일<br />
                                시행일자: 2026년 2월 24일
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
