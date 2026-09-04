import React, { useState } from 'react';
import { AcademyCourse, Language, CommercialAd } from '../types';
import { GraduationCap, Clock, Award, Users, BookOpen, CheckCircle, X } from 'lucide-react';
import { SponsoredAdBanner } from './SponsoredAdBanner';

interface AcademyModuleProps {
  courses: AcademyCourse[];
  language: Language;
  sponsoredAd?: CommercialAd;
  onNavigateToAds?: () => void;
}

export const AcademyModule: React.FC<AcademyModuleProps> = ({ 
  courses, 
  language,
  sponsoredAd,
  onNavigateToAds
}) => {
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(['acad-2']);
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const isAr = language === 'ar';

  const handleEnroll = (courseId: string) => {
    if (!enrolledCourseIds.includes(courseId)) {
      setEnrolledCourseIds([...enrolledCourseIds, courseId]);
      setToastMessage(isAr ? 'تم تسجيلك بنجاح في الدورة التدريبية!' : 'Successfully enrolled in course!');
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-800 text-white text-xs font-bold py-3 px-5 rounded-xl shadow-xl flex items-center gap-2 border border-emerald-600 animate-in slide-in-from-bottom">
          <CheckCircle className="w-4 h-4 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="pb-4 border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>{isAr ? 'أكاديمية أثر للتدريب الزراعي التعاوني' : 'ATHAR Cooperative Agronomy Academy'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            {isAr ? 'بناء القدرات والشهادات الزراعية المعتمدة' : 'Capacity Building & Accredited Certifications'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            {isAr ? 'برامج مهنية متقدمة موجهة لأعضاء الجمعية بإشراف خبراء ومهندسين زراعيين' : 'Professional cohorts for cooperative members instructed by top agronomists'}
          </p>
        </div>

        <div className="flex items-center gap-3 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
          <Award className="w-5 h-5 text-emerald-700" />
          <div>
            <div className="text-xs font-bold text-emerald-950">
              {isAr ? 'شهادات مهنية معتمدة' : 'Cooperative Badges'}
            </div>
            <div className="text-[11px] text-emerald-700">
              {isAr ? 'معترف بها في برامج الدعم الزراعي' : 'Eligible for national agri-subsidies'}
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Sponsored Ad in Academy */}
      {sponsoredAd && (
        <SponsoredAdBanner
          ad={sponsoredAd}
          language={language}
          onNavigateToAds={onNavigateToAds}
          compact
        />
      )}

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const isEnrolled = enrolledCourseIds.includes(course.id);
          return (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    {isAr ? course.level.ar : course.level.en}
                  </span>
                  <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-stone-400" />
                    {course.enrolledStudents} {isAr ? 'متدرب' : 'learners'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900 leading-snug">
                  {isAr ? course.title.ar : course.title.en}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {isAr ? course.description.ar : course.description.en}
                </p>

                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-xs space-y-1.5">
                  <div className="text-stone-700 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>{isAr ? course.instructor.ar : course.instructor.en}</span>
                  </div>
                  <div className="flex items-center justify-between text-stone-500 text-[11px] pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {course.lessonsCount} {isAr ? 'محاضرات' : 'modules'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium bg-emerald-50/70 p-2 rounded-lg">
                  <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{isAr ? course.badge.ar : course.badge.en}</span>
                </div>
              </div>

              <div className="pt-5 mt-2 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="text-xs font-semibold text-stone-600 hover:text-stone-900 hover:underline"
                >
                  {isAr ? 'التفاصيل والمحاور' : 'Syllabus'}
                </button>

                {isEnrolled ? (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{isAr ? 'مسجل بالفعل' : 'Enrolled'}</span>
                  </span>
                ) : (
                  <button
                    onClick={() => handleEnroll(course.id)}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors shadow-xs"
                  >
                    {isAr ? 'التسجيل المجاني للأعضاء' : 'Enroll Free'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Syllabus Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-stone-200 relative animate-in zoom-in-95">
            <button
              onClick={() => setSelectedCourse(null)}
              className={`absolute top-5 text-stone-400 hover:text-stone-700 p-1 rounded-lg ${isAr ? 'left-5' : 'right-5'}`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="text-xs font-bold text-emerald-700">
                {isAr ? selectedCourse.level.ar : selectedCourse.level.en} • {selectedCourse.duration}
              </div>

              <h3 className="text-xl font-bold text-stone-900">
                {isAr ? selectedCourse.title.ar : selectedCourse.title.en}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isAr ? selectedCourse.description.ar : selectedCourse.description.en}
              </p>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
                <div className="font-bold text-xs text-stone-800">
                  {isAr ? 'محاور الدورة التطبيقية:' : 'Course Practical Modules:'}
                </div>
                <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                  <li>{isAr ? 'المدخل النظري والمعايير البيئية الزراعية' : 'Theoretical Foundations & Environmental Standards'}</li>
                  <li>{isAr ? 'التطبيقات الحقلية الميدانية في مزارع الجمعية النموذجية' : 'Field Practices at Cooperative Showcase Farms'}</li>
                  <li>{isAr ? 'إدارة التكاليف ودراسات الجدوى الاقتصادية' : 'Financial Optimization & Feasibility Modeling'}</li>
                  <li>{isAr ? 'مشروع التخرج المعتمد للحصول على الشهادة' : 'Capstone Certification Assignment'}</li>
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-100"
                >
                  {isAr ? 'إلغاء' : 'Dismiss'}
                </button>
                <button
                  onClick={() => {
                    handleEnroll(selectedCourse.id);
                    setSelectedCourse(null);
                  }}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2 rounded-lg"
                >
                  {isAr ? 'تأكيد التسجيل الآن' : 'Confirm Enrollment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
