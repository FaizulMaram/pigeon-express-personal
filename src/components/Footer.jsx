import LogoWhite from "../icons/logoPigeon_white 1.svg";

const Footer = () => {
  return (
    <div className="bg-[#002D72] text-white py-10 px-6">
      {/* Top */}
      <hr className="text-[#00A1ED]/50" />
      <div className="max-w-7xl mt-6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <img src={LogoWhite} className="w-40 mt-6" />
        </div>

        {/* Col 1 */}
        <div>
          <h3 className="text-[#00A1ED] font-semibold mb-3">Услуги</h3>
          <ul className="space-y-3 text-sm font-light">
            <li>Куриерски услуги</li>
            <li>Пощенски услуги</li>
            <li>Карго услуги</li>
            <li>Международни услуги</li>
            <li>Еконтомат</li>
            <li>Econt drive</li>
            <li>Административни услуги</li>
            <li>Общи условия</li>
          </ul>
        </div>

        {/* Col 2 */}
        <div>
          <h3 className="text-[#00A1ED] font-semibold mb-3">Pigeon Express</h3>
          <ul className="space-y-3 text-sm font-light">
            <li>Вход в Pigeon Express</li>
            <li>Платете онлайн</li>
            <li>Електронна фактура</li>
          </ul>
          <h3 className="text-[#00A1ED] font-semibold mt-4 mb-2">
            Офиси на Pigeon
          </h3>
          <ul className="space-y-3 text-sm font-light">
            <li>Намери офис</li>
            <li>Еконт партньори</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h3 className="text-[#00A1ED] font-semibold mb-3">
            Грижа за клиента
          </h3>
          <ul className="space-y-3 text-sm font-light">
            <li>Клиентски център</li>
            <li>Подайте рекламация</li>
            <li>Контакти</li>
            <li>Често задавани въпроси</li>
          </ul>
          <h3 className="text-[#00A1ED] font-semibold mt-4 mb-2">
            Условия и политики:
          </h3>
          <ul className="space-y-3 text-sm font-light">
            <li>Политика за поверителност</li>
            <li>Общи условия</li>
            <li>GDPR</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <hr className="mt-9 text-[#00A1ED]/50" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 mt-2 pt-4">
        <p>Всички права запазени © 2025 - Пигеон Експрес АД</p>
        <div className="flex gap-2 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Условия за ползване на сайта
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Политика за лични данни
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Карта на сайта
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
