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
                            <h2 className="text-white text-xl font-bold mb-4">1. 개인정보의 수집 및 이용 목적</h2>
                            <p className="mb-3">리드메타(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다.</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                <li>서비스 제공 및 문의 대응</li>
                                <li>마케팅 및 광고 서비스 이용</li>
                                <li>서비스 이용 통계 분석 및 개선</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">2. 수집하는 개인정보의 항목</h2>
                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                <li><strong className="text-slate-300">필수항목:</strong> 이름, 이메일 주소</li>
                                <li><strong className="text-slate-300">선택항목:</strong> 회사명, 연락처</li>
                                <li><strong className="text-slate-300">자동수집:</strong> IP 주소, 쿠키, 브라우저 종류, 접속 기록</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">3. 개인정보의 보유 및 이용 기간</h2>
                            <p>
                                회사는 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                                다만, 관계 법령에 의하여 보존이 필요한 경우에는 해당 법령에서 정한 기간 동안 보존합니다.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400 mt-3">
                                <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                                <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                                <li>웹사이트 방문 기록: 3개월</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">4. 개인정보의 제3자 제공</h2>
                            <p>
                                회사는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다.
                                다만, 이용자의 동의가 있거나 법령의 규정에 의한 경우는 예외로 합니다.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">5. 개인정보의 파기 절차 및 방법</h2>
                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                <li><strong className="text-slate-300">전자적 파일:</strong> 복구 불가능한 방법으로 영구 삭제</li>
                                <li><strong className="text-slate-300">종이 문서:</strong> 분쇄기로 분쇄하거나 소각</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">6. 정보주체의 권리·의무</h2>
                            <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다:</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400 mt-3">
                                <li>개인정보 열람 요구</li>
                                <li>오류 등이 있을 경우 정정 요구</li>
                                <li>삭제 요구</li>
                                <li>처리 정지 요구</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">7. 쿠키(Cookie)의 사용</h2>
                            <p>
                                회사는 이용자에게 최적화된 서비스를 제공하기 위해 쿠키를 사용할 수 있습니다.
                                이용자는 웹 브라우저 설정을 통해 쿠키 사용을 거부할 수 있으나,
                                일부 서비스 이용에 제한이 있을 수 있습니다.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">8. 개인정보 보호책임자</h2>
                            <div className="glass-card p-6 mt-3">
                                <p className="text-slate-300">
                                    <strong className="text-white">개인정보 보호책임자</strong><br />
                                    이메일: privacy@leadmeta.xyz<br />
                                    웹사이트: www.leadmeta.xyz
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <p className="text-slate-500">
                                본 개인정보처리방침은 2026년 2월 24일부터 시행합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
