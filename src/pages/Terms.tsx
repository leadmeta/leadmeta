export default function Terms() {
    return (
        <>
            <section className="pt-32 pb-12 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">Legal</span>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4 mb-4">이용약관</h1>
                    <p className="text-slate-500 text-sm">최종 수정일: 2026년 2월 24일</p>
                </div>
            </section>

            <div className="section-divider" />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-invert prose-slate max-w-none">
                    <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제1조 (목적)</h2>
                            <p>
                                이 약관은 리드메타(이하 "회사")가 제공하는 웹사이트 및 관련 서비스(이하 "서비스")의
                                이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제2조 (정의)</h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>"서비스"란 회사가 제공하는 키워드 분석, 블로그 네트워크, 마케팅 대행 등 모든 서비스를 의미합니다.</li>
                                <li>"이용자"란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                                <li>"콘텐츠"란 서비스에서 제공하는 텍스트, 이미지, 데이터 등의 정보를 의미합니다.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제3조 (약관의 효력 및 변경)</h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>이 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.</li>
                                <li>회사는 관련 법령에 위배되지 않는 범위에서 이 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지합니다.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제4조 (서비스의 제공 및 변경)</h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>회사는 키워드 분석 서비스(어바웃키워드), 블로그 콘텐츠 서비스, 광고 및 마케팅 대행 서비스를 제공합니다.</li>
                                <li>회사는 서비스의 내용을 변경할 수 있으며, 이 경우 변경 사항을 공지합니다.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제5조 (이용자의 의무)</h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>이용자는 서비스를 이용함에 있어 관련 법령, 이 약관, 이용안내 및 서비스와 관련하여 공지한 주의사항을 준수하여야 합니다.</li>
                                <li>이용자는 서비스의 이용권한, 기타 이용계약상의 지위를 타인에게 양도, 증여할 수 없습니다.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제6조 (지적재산권)</h2>
                            <p>
                                서비스에서 제공되는 모든 콘텐츠의 저작권 및 지적재산권은 회사에 귀속됩니다.
                                이용자는 회사의 사전 동의 없이 서비스를 통해 얻은 정보를 상업적으로 이용하거나
                                제3자에게 제공할 수 없습니다.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제7조 (면책조항)</h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>회사는 천재지변 등 불가항력적인 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
                                <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">제8조 (분쟁 해결)</h2>
                            <p>
                                서비스 이용과 관련하여 회사와 이용자 사이에 분쟁이 발생한 경우,
                                대한민국 법률을 적용하며, 관할 법원은 회사의 본사 소재지를 관할하는 법원으로 합니다.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <p className="text-slate-500">
                                본 약관은 2026년 2월 24일부터 시행합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
