import {FC, memo} from "react";
import {Container} from "../../components/Container.ts";
import {S} from './Policy_Styles.ts'
import {Icon} from "../../components/icon/Icon.tsx";
import {Decor} from "../../components/Decor.ts";

export const Policy: FC = memo(() => {
    return (
        <S.Policy>
            <Decor>
                <Icon id={'decor4.2'} width={'102'} height={'102'} viewBox={'0 0 120 120'}/>
            </Decor>
            <Container>
                <h1>Политика конфиденциальности</h1>
                <h2>1. Обрабатываемые данные</h2>
                <ul>
                    <li>1.1. Мы не осуществляем сбор ваших персональных данных с использованием Сайта.</li>
                    <li>1.2. Все данные, собираемые на Сайте, предоставляются и принимаются в обезличенной форме (далее
                        –
                        «Обезличенные данные»).
                    </li>
                    <li>
                        1.3. Обезличенные данные включают следующие сведения, которые не позволяют вас идентифицировать:
                        <ul>
                            <li>1.3.1. Информацию, которую вы предоставляете о себе самостоятельно с использованием
                                онлайн-форм и программных модулей Сайта, включая имя и номер телефона и/или адрес
                                электронной почты.
                            </li>
                            <li>1.3.2. Данные, которые передаются в обезличенном виде в автоматическом режиме в
                                зависимости
                                от настроек используемого вами программного обеспечения.
                            </li>
                        </ul>
                    </li>
                    <li>1.4. Администрация вправе устанавливать требования к составу Обезличенных данных Пользователя,
                        которые собираются использованием Сайта.
                    </li>
                    <li>1.5. Если определенная информация не помечена как обязательная, ее предоставление или раскрытие
                        осуществляется Пользователем на свое усмотрение. Одновременно вы даете информированное согласие
                        на
                        доступ неограниченного круга лиц к таким данным. Указанные данные становится общедоступными с
                        момента предоставления и/или раскрытия в иной форме.
                    </li>
                    <li>1.6. Администрация не осуществляет проверку достоверности предоставляемых данных и наличия у
                        Пользователя необходимого согласия на их обработку в соответствии с настоящей Политикой,
                        полагая,
                        что Пользователь действует добросовестно, осмотрительно и прилагает все необходимые усилия к
                        поддержанию такой информации в актуальном состоянии и получению всех необходимых согласий на ее
                        использование.
                    </li>
                    <li>1.7. Вы осознаете и принимаете возможность использования на Сайте программного обеспечения
                        третьих
                        лиц, в результате чего такие лица могут получать и передавать указанные в п.1.3 данные в
                        обезличенном виде.
                    </li>
                    <li>1.8. Состав и условия сбора обезличенных данных с использованием программного обеспечения
                        третьих
                        лиц определяются непосредственно их правообладателями и могут включать: данные браузера (тип,
                        версия, cookie), данные устройства и место его положения, данные операционной системы (тип,
                        версия,
                        разрешение экрана), данные запроса (время, источник перехода, IP-адрес).
                    </li>
                    <li>1.9. Администрация не несет ответственность за порядок использования Обезличенных данных
                        Пользователя третьими лицами.
                    </li>
                </ul>
                <h2>2. Цели обработки данных</h2>
                <ul>
                    <li>
                        2.1. Администрация использует данные в следующих целях:
                        <ul>
                            <li>2.1.1. Обработка поступающих запросов и связи с Пользователем;</li>
                            <li>2.1.2. Информационное обслуживание, включая рассылку рекламно-информационных материалов;
                            </li>
                            <li>2.1.3. Проведение маркетинговых, статистических и иных исследований;</li>
                            <li>2.1.4. Таргетирование рекламных материалов на Сайте.</li>
                        </ul>
                    </li>
                </ul>
                <h2>3. Требования к защите данных</h2>
                <ul>
                    <li>3.1. Администрация осуществляет хранение данных и обеспечивает их охрану от несанкционированного
                        доступа и распространения в соответствии с внутренними правилами и регламентами.
                    </li>
                    <li>3.2. В отношении полученных данных сохраняется конфиденциальность, за исключением случаев, когда
                        они
                        сделаны Пользователем общедоступными, а также когда используемые на Сайте технологии и
                        программное
                        обеспечение третьих лиц либо настройки используемого Пользователем программного обеспечения
                        предусматривают открытый обмен с данными лицами и/или иными участниками и пользователями сети
                        Интернет.
                    </li>
                    <li>3.3. В целях повышения качества работы Администрация вправе хранить лог-файлы о действиях,
                        совершенных Пользователем в рамках использования Сайта в течение 1 (Одного) года.
                    </li>
                </ul>
                <h2>4. Передача данных</h2>
                <ul>
                    <li>4.1. Администрация вправе передать данные третьим лицам в следующих случаях:
                        <ul>
                            <li>Пользователь выразил свое согласие на такие действия, включая случаи применения
                                Пользователем настроек используемого программного обеспечения, не ограничивающих
                                предоставление определенной информации;
                            </li>
                            <li>Передача необходима в рамках использования Пользователем функциональных возможностей
                                Сайта;
                            </li>
                            <li>Передача требуется в соответствии с целями обработки данных;</li>
                            <li>В связи с передачей Сайта во владение, пользование или собственность такого третьего
                                лица;
                            </li>
                            <li>По запросу суда или иного уполномоченного государственного органа в рамках установленной
                                законодательством процедуры;
                            </li>
                            <li>Для защиты прав и законных интересов Администрации в связи с допущенными Пользователем
                                нарушениями.
                            </li>
                        </ul>
                    </li>
                </ul>
                <h2>5. Изменение Политики конфиденциальности</h2>
                <ul>
                    <li>5.1. Настоящая Политика может быть изменена или прекращена Администрацией в одностороннем
                        порядке без предварительного уведомления Пользователя. Новая редакция Политики вступает в силу с
                        момента ее размещения на Сайте, если иное не предусмотрено новой редакцией Политики.
                    </li>
                    <li>5.2. Действующая редакция Политики находится на Сайте в сети Интернет по адресу.
                        Действующая редакция Политики от 26 февраля 2024 г.
                    </li>
                </ul>
                <S.PolicyNote>
                    Шаблон Политики конфиденциальности разработала <a href="http://it-lex.ru" target="_blank"
                                                                      title="Составить политику конфиденциальности для сайта"> Юридическая
                    компания АйТи-Лекс</a>
                </S.PolicyNote>
            </Container>
        </S.Policy>
    );
})