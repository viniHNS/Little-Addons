import { DialogueHelper } from "@spt-aki/helpers/DialogueHelper";
import { ItemHelper } from "@spt-aki/helpers/ItemHelper";
import { ProfileHelper } from "@spt-aki/helpers/ProfileHelper";
import { TraderHelper } from "@spt-aki/helpers/TraderHelper";
import { Item } from "@spt-aki/models/eft/common/tables/IItem";
import { ITemplateItem } from "@spt-aki/models/eft/common/tables/ITemplateItem";
import { MemberCategory } from "@spt-aki/models/enums/MemberCategory";
import { IQuestConfig } from "@spt-aki/models/spt/config/IQuestConfig";
import { IRagfairConfig } from "@spt-aki/models/spt/config/IRagfairConfig";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { SaveServer } from "@spt-aki/servers/SaveServer";
import { ItemFilterService } from "@spt-aki/services/ItemFilterService";
import { LocaleService } from "@spt-aki/services/LocaleService";
import { MailSendService } from "@spt-aki/services/MailSendService";
import { HashUtil } from "@spt-aki/utils/HashUtil";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { TimeUtil } from "@spt-aki/utils/TimeUtil";
/**
 * Helper class for common ragfair server actions
 */
export declare class RagfairServerHelper {
    protected randomUtil: RandomUtil;
    protected hashUtil: HashUtil;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected profileHelper: ProfileHelper;
    protected itemHelper: ItemHelper;
    protected localeService: LocaleService;
    protected dialogueHelper: DialogueHelper;
    protected traderHelper: TraderHelper;
    protected jsonUtil: JsonUtil;
    protected mailSendService: MailSendService;
    protected itemFilterService: ItemFilterService;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    protected questConfig: IQuestConfig;
    protected static goodsReturnedTemplate: string;
    constructor(randomUtil: RandomUtil, hashUtil: HashUtil, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, profileHelper: ProfileHelper, itemHelper: ItemHelper, localeService: LocaleService, dialogueHelper: DialogueHelper, traderHelper: TraderHelper, jsonUtil: JsonUtil, mailSendService: MailSendService, itemFilterService: ItemFilterService, configServer: ConfigServer);
    /**
     * Is item valid / on blacklist / quest item
     * @param itemDetails
     * @returns boolean
     */
    isItemValidRagfairItem(itemDetails: [boolean, ITemplateItem]): boolean;
    /**
     * Is supplied item tpl on the ragfair custom blacklist from configs/ragfair.json/dynamic
     * @param itemTemplateId Item tpl to check is blacklisted
     * @returns True if its blacklsited
     */
    protected isItemOnCustomFleaBlacklist(itemTemplateId: string): boolean;
    /**
     * is supplied id a trader
     * @param traderId
     * @returns True if id was a trader
     */
    isTrader(traderId: string): boolean;
    /**
     * Is this user id the logged in player
     * @param userId Id to test
     * @returns True is the current player
     */
    isPlayer(userId: string): boolean;
    /**
     * Send items back to player
     * @param sessionID Player to send items to
     * @param returnedItems Items to send to player
     */
    returnItems(sessionID: string, returnedItems: Item[]): void;
    calculateDynamicStackCount(tplId: string, isWeaponPreset: boolean): number;
    /**
     * Choose a currency at random with bias
     * @returns currency tpl
     */
    getDynamicOfferCurrency(): string;
    getMemberType(userID: string): MemberCategory;
    getNickname(userID: string): string;
    getPresetItems(item: any): Item[];
    getPresetItemsByTpl(item: Item): Item[];
    /**
     * Generate new unique ids for the children while preserving hierarchy
     * @param item base item
     * @param preset
     * @returns Item array with new IDs
     */
    reparentPresets(item: Item, preset: Item[]): Item[];
}
