export const Docs: Doc[] = [
    {
        label: "레거시 API",
        path: "/legacy",
        children: [
            {
                label: "객체",
                children: [
                    { 
                        label: "Api", 
                        path: "/legacy/Api" ,
                        children: [
                            { label: "canReply()", path: "/legacy/Api/canReply" },
                            { label: "compile(Boolean?)", path: "/legacy/Api/compile(Boolean$)" },
                            { label: "compile(String, Boolean?)", path: "/legacy/Api/compile(String,Boolean$)" },
                            { label: "gc()", path: "/legacy/Api/gc" },
                            { label: "getActiveThreadsCount()", path: "/legacy/Api/getActiveThreadsCount" },
                            { label: "getContext()", path: "/legacy/Api/getContext" },
                            { label: "getLastImage()", path: "/legacy/Api/getLastImage" },
                            { label: "getLastImageBitmap()", path: "/legacy/Api/getLastImageBitmap" },
                            { label: "getRoomList()", path: "/legacy/Api/getRoomList" },
                            { label: "getScriptNames()", path: "/legacy/Api/getScriptNames" },
                            { label: "interruptThreads()", path: "/legacy/Api/interruptThreads" },
                            { label: "isCompiled()", path: "/legacy/Api/isCompiled" },
                            { label: "isCompiling()", path: "/legacy/Api/isCompiling" },
                            { label: "isOn()", path: "/legacy/Api/isOn" },
                            { label: "isTerminated()", path: "/legacy/Api/isTerminated" },
                            { label: "makeNoti()", path: "/legacy/Api/makeNoti" },
                            { label: "markAsRead()", path: "/legacy/Api/markAsRead" },
                            { label: "markAsReadOnID(BigInt)", path: "/legacy/Api/markAsReadOnID(BigInt)" },
                            { label: "markAsReadOnID(String)", path: "/legacy/Api/markAsReadOnID(String)" },
                            { label: "off()", path: "/legacy/Api/off" },
                            { label: "on()", path: "/legacy/Api/on" },
                            { label: "papagoTranslate()", path: "/legacy/Api/papagoTranslate" },
                            { label: "prepare()", path: "/legacy/Api/prepare" },
                            { label: "reload(Boolean?)", path: "/legacy/Api/reload(Boolean$)" },
                            { label: "reload(String, Boolean?)", path: "/legacy/Api/reload(String,Boolean$)" },
                            { label: "replyRoom()", path: "/legacy/Api/replyRoom" },
                            { label: "replyToID(BigInt, String, Boolean)", path: "/legacy/Api/replyToID(BigInt,String,Boolean)" },
                            { label: "replyToID(String, String, Boolean)", path: "/legacy/Api/replyToID(String,String,Boolean)" },
                            { label: "showToast()", path: "/legacy/Api/showToast" },
                            { label: "UIThread()", path: "/legacy/Api/UIThread" },
                            { label: "unload()", path: "/legacy/Api/unload" },
                        ]
                    },
                    {
                        label: "AppData",
                        path: "/legacy/AppData",
                        children: [
                            { label: "clear()", path: "/legacy/AppData/clear" },
                            { label: "getBoolean()", path: "/legacy/AppData/getBoolean" },
                            { label: "getInt()", path: "/legacy/AppData/getInt" },
                            { label: "getString()", path: "/legacy/AppData/getString" },
                            { label: "putBoolean()", path: "/legacy/AppData/putBoolean" },
                            { label: "putInt()", path: "/legacy/AppData/putInt" },
                            { label: "putString()", path: "/legacy/AppData/putString" },
                            { label: "remove()", path: "/legacy/AppData/remove" },
                        ]
                    },
                    {
                        label: "Bridge",
                        path: "/legacy/Bridge",
                        children: [
                            { label: "evaluateStringIn()", path: "/legacy/Bridge/evaluateStringIn" },
                            { label: "getGlobalVariable()", path: "/legacy/Bridge/getGlobalVariable" },
                            { label: "getScopeOf()", path: "/legacy/Bridge/getScopeOf" },
                            { label: "getVariable()", path: "/legacy/Bridge/getVariable" },
                            { label: "isAllowed()", path: "/legacy/Bridge/isAllowed" },
                            { label: "setGlobalVariable()", path: "/legacy/Bridge/setGlobalVariable" },
                            { label: "setVariable()", path: "/legacy/Bridge/setVariable" },
                        ]
                    },
                    {
                        label: "DataBase",
                        path: "/legacy/DataBase",
                        children: [
                            { label: "appendDataBase()", path: "/legacy/DataBase/appendDataBase" },
                            { label: "getDataBase()", path: "/legacy/DataBase/getDataBase" },
                            { label: "removeDataBase()", path: "/legacy/DataBase/removeDataBase" },
                            { label: "setDataBase()", path: "/legacy/DataBase/setDataBase" },
                        ]
                    },
                    {
                        label: "Device",
                        path: "/legacy/Device",
                        children: [
                            { label: "acquireWakeLock()", path: "/legacy/Device/acquireWakeLock" },
                            { label: "getAndroidVersionCode()" , path: "/legacy/Device/getAndroidVersionCode" },
                            { label: "getAndroidVersionName()" , path: "/legacy/Device/getAndroidVersionName" },
                            { label: "getApiLevel()", path: "/legacy/Device/getApiLevel" },
                            { label: "getBatteryHealth()", path: "/legacy/Device/getBatteryHealth" },
                            { label: "getBatteryIntent()", path: "/legacy/Device/getBatteryIntent" },
                            { label: "getBatteryLevel()", path: "/legacy/Device/getBatteryLevel" },
                            { label: "getBatteryStatus()", path: "/legacy/Device/getBatteryStatus" },
                            { label: "getBatteryTemp()", path: "/legacy/Device/getBatteryTemp" },
                            { label: "getBatteryTemperature()", path: "/legacy/Device/getBatteryTemperature" },
                            { label: "getBatteryVoltage()", path: "/legacy/Device/getBatteryVoltage" },
                            { label: "getBuild()", path: "/legacy/Device/getBuild" },
                            { label: "getConnectedNetworkType()", path: "/legacy/Device/getConnectedNetworkType" },
                            { label: "getFreeMemory()", path: "/legacy/Device/getFreeMemory" },
                            { label: "getFreeStorageSpace()", path: "/legacy/Device/getFreeStorageSpace" },
                            { label: "getMaxMemory()", path: "/legacy/Device/getMaxMemory" },
                            { label: "getModelName()", path: "/legacy/Device/getModelName" },
                            { label: "getPhoneBrand()", path: "/legacy/Device/getPhoneBrand" },
                            { label: "getPhoneModel()", path: "/legacy/Device/getPhoneModel" },
                            { label: "getPlugType()", path: "/legacy/Device/getPlugType" },
                            { label: "getTotalMemory()", path: "/legacy/Device/getTotalMemory" },
                            { label: "getTotalStorageSpace()", path: "/legacy/Device/getTotalStorageSpace" },
                            { label: "getWifiName()", path: "/legacy/Device/getWifiName" },
                            { label: "isCharging()", path: "/legacy/Device/isCharging" },
                            { label: "isPowerSaveMode()", path: "/legacy/Device/isPowerSaveMode" },
                            { label: "isScreenOn()", path: "/legacy/Device/isScreenOn" },
                            { label: "releaseWakeLock()", path: "/legacy/Device/releaseWakeLock" },
                        ]
                    },
                    {
                        label: "FileStream",
                        path: "/legacy/FileStream",
                        children: [
                            { label: "append()", path: "/legacy/FileStream/append" },
                            { label: "copyFile()", path: "/legacy/FileStream/copyFile" },
                            { label: "create()", path: "/legacy/FileStream/create" },
                            { label: "createDir()", path: "/legacy/FileStream/createDir" },
                            { label: "getSdcardPath()", path: "/legacy/FileStream/getSdcardPath" },
                            { label: "moveFile()", path: "/legacy/FileStream/moveFile" },
                            { label: "read()", path: "/legacy/FileStream/read" },
                            { label: "readJSON()", path: "/legacy/FileStream/readJSON" },
                            { label: "remove()", path: "/legacy/FileStream/remove" },
                            { label: "save()", path: "/legacy/FileStream/save" },
                            { label: "saveJSON()", path: "/legacy/FileStream/saveJSON" },
                            { label: "write()", path: "/legacy/FileStream/write" },
                            { label: "writeJSON()", path: "/legacy/FileStream/writeJSON" },
                        ]
                    },
                    {
                        label: "Log",
                        path: "/legacy/Log",
                        children: [
                            { label: "clear()", path: "/legacy/Log/clear" },
                            { label: "d()", path: "/legacy/Log/d" },
                            { label: "debug()", path: "/legacy/Log/debug" },
                            { label: "e()", path: "/legacy/Log/e" },
                            { label: "error()", path: "/legacy/Log/error" },
                            { label: "i()", path: "/legacy/Log/i" },
                            { label: "info()", path: "/legacy/Log/info" },
                        ]
                    },
                    {
                        label: "SessionManager",
                        path: "/legacy/SessionManager",
                        children: [
                            { label: "bindSession(String, android.app.Notification.Action?)", path: "/legacy/SessionManager/bindSession(String,Action$)" },
                            { label: "bindSession(String, String, android.app.Notification.Action?)", path: "/legacy/SessionManager/bindSession(String,String,Action$)" },
                        ]
                    },
                    { 
                        label: "Utils", 
                        path: "/legacy/Utils",
                        children: [
                            { label: "compress()", path: "/legacy/Utils/compress" },
                            { label: "copyToClipboard()", path: "/legacy/Utils/copyToClipboard" },
                            { label: "delay()", path: "/legacy/Utils/delay" },
                            { label: "getAndroidVersionCode()", path: "/legacy/Utils/getAndroidVersionCode" },
                            { label: "getAndroidVersionName()", path: "/legacy/Utils/getAndroidVersionName" },
                            { label: "getLw()", path: "/legacy/Utils/getLw" },
                            { label: "getLwLined()", path: "/legacy/Utils/getLwLined" },
                            { label: "getPhoneBrand()", path: "/legacy/Utils/getPhoneBrand" },
                            { label: "getPhoneModel()", path: "/legacy/Utils/getPhoneModel" },
                            { label: "getRandomUserAgent()", path: "/legacy/Utils/getRandomUserAgent" },
                            { label: "getWeatherJSON()", path: "/legacy/Utils/getWeatherJSON" },
                            { label: "getWebText()", path: "/legacy/Utils/getWebText" },
                            { label: "getWebText2()", path: "/legacy/Utils/getWebText2" },
                            { label: "getZoneIdByName()", path: "/legacy/Utils/getZoneIdByName" },
                            { label: "isUndefined()", path: "/legacy/Utils/isUndefined" },
                            { label: "measureNanoTime()", path: "/legacy/Utils/measureNanoTime" },
                            { label: "measureTimeMillis()", path: "/legacy/Utils/measureTimeMillis" },
                            { label: "parse()", path: "/legacy/Utils/parse" },
                            { label: "randomAlphanumeric()", path: "/legacy/Utils/randomAlphanumeric" },
                            { label: "removeRLO()", path: "/legacy/Utils/removeRLO" },
                            { label: "removeTags()", path: "/legacy/Utils/removeTags" },
                            { label: "sleep()", path: "/legacy/Utils/sleep" },
                            { label: "toast()", path: "/legacy/Utils/toast" },
                            { label: "vibrate()", path: "/legacy/Utils/vibrate" },
                            { label: "xmlToJson()", path: "/legacy/Utils/xmlToJson" },
                        ]
                    },
                ]
            },
            {
                label: "이벤트 리스너",
                children: [

                ]
            }
        ]
    },
    {
        label: "API2",
        path: "/api2",
        children: [
            {
                label: "객체",
                children: [
                    {
                        label: "App",
                        path: "/api2/App",
                        children: [
                            { label: "getContext()", path: "/api2/App/getContext" },
                            { label: "runOnUiThread()", path: "/api2/App/runOnUiThread" },
                        ]
                    },
                    {
                        label: "AppData",
                        path: "/api2/AppData",
                        children: [
                            { label: "clear()", path: "/api2/AppData/clear" },
                            { label: "getBoolean()", path: "/api2/AppData/getBoolean" },
                            { label: "getInt()", path: "/api2/AppData/getInt" },
                            { label: "getString()", path: "/api2/AppData/getString" },
                            { label: "putBoolean()", path: "/api2/AppData/putBoolean" },
                            { label: "putInt()", path: "/api2/AppData/putInt" },
                            { label: "putString()", path: "/api2/AppData/putString" },
                            { label: "remove()", path: "/api2/AppData/remove" },
                        ]
                    },
                    {
                        label: "Bot",
                        path: "/api2/Bot",
                        children: [
                            { label: "addListener()", path: "/api2/Bot/addListener" },
                            { label: "canReply()", path: "/api2/Bot/canReply" },
                            { label: "compile()", path: "/api2/Bot/compile" },
                            { label: "getName()", path: "/api2/Bot/getName" },
                            { label: "getPower()", path: "/api2/Bot/getPower" },
                            { label: "listeners()", path: "/api2/Bot/listeners" },
                            { label: "markAsRead(String?)", path: "/api2/Bot/markAsRead(String$)" },
                            { label: "markAsRead(String, String?)", path: "/api2/Bot/markAsRead(String,String$)" },
                            { label: "off()", path: "/api2/Bot/off" },
                            { label: "on()", path: "/api2/Bot/on" },
                            { label: "prependListener()", path: "/api2/Bot/prependListener" },
                            { label: "removeAllListeners()", path: "/api2/Bot/removeAllListeners" },
                            { label: "removeListener()", path: "/api2/Bot/removeListener" },
                            { label: "send()", path: "/api2/Bot/send" },
                            { label: "setCommandPrefix()", path: "/api2/Bot/setCommandPrefix" },
                            { label: "setPower()", path: "/api2/Bot/setPower" },
                            { label: "unload()", path: "/api2/Bot/unload" },
                        ]
                    },
                    {
                        label: "BotManager",
                        path: "/api2/BotManager",
                        children: [
                            { label: "compile()", path: "/api2/BotManager/compile" },
                            { label: "compileAll()", path: "/api2/BotManager/compileAll" },
                            { label: "getBot()", path: "/api2/BotManager/getBot" },
                            { label: "getBotList()", path: "/api2/BotManager/getBotList" },
                            { label: "getCurrentBot()", path: "/api2/BotManager/getCurrentBot" },
                            { label: "getPower()", path: "/api2/BotManager/getPower" },
                            { label: "getRooms()", path: "/api2/BotManager/getRooms" },
                            { label: "isCompiled()", path: "/api2/BotManager/isCompiled" },
                            { label: "prepare(Boolean?)", path: "/api2/BotManager/prepare(Boolean$)" },
                            { label: "prepare(String, Boolean?)", path: "/api2/BotManager/prepare(String,Boolean$)" },
                            { label: "setPower()", path: "/api2/BotManager/setPower" },
                            { label: "unload()", path: "/api2/BotManager/unload" },
                        ]
                    },
                    {
                        label: "Broadcast",
                        path: "/api2/Broadcast",
                        children: [
                            { label: "register()", path: "/api2/Broadcast/register" },
                            { label: "send()", path: "/api2/Broadcast/send" },
                            { label: "unregister()", path: "/api2/Broadcast/unregister" },
                            { label: "unregisterAll()", path: "/api2/Broadcast/unregisterAll" },
                        ]
                    },
                    {
                        label: "Database",
                        path: "/api2/Database",
                        children: [
                            { label: "exists()", path: "/api2/Database/exists" },
                            { label: "readObject()", path: "/api2/Database/readObject" },
                            { label: "readString()", path: "/api2/Database/readString" },
                            { label: "writeObject()", path: "/api2/Database/writeObject" },
                            { label: "writeString()", path: "/api2/Database/writeString" },
                        ]
                    },
                    {
                        label: "Device",
                        path: "/api2/Device",
                        children: [
                            { label: "acquireWakeLock()", path: "/api2/Device/acquireWakeLock" },
                            { label: "getAndroidVersionCode()" , path: "/api2/Device/getAndroidVersionCode" },
                            { label: "getAndroidVersionName()" , path: "/api2/Device/getAndroidVersionName" },
                            { label: "getApiLevel()", path: "/api2/Device/getApiLevel" },
                            { label: "getBatteryHealth()", path: "/api2/Device/getBatteryHealth" },
                            { label: "getBatteryIntent()", path: "/api2/Device/getBatteryIntent" },
                            { label: "getBatteryLevel()", path: "/api2/Device/getBatteryLevel" },
                            { label: "getBatteryStatus()", path: "/api2/Device/getBatteryStatus" },
                            { label: "getBatteryTemp()", path: "/api2/Device/getBatteryTemp" },
                            { label: "getBatteryTemperature()", path: "/api2/Device/getBatteryTemperature" },
                            { label: "getBatteryVoltage()", path: "/api2/Device/getBatteryVoltage" },
                            { label: "getBuild()", path: "/api2/Device/getBuild" },
                            { label: "getConnectedNetworkType()", path: "/api2/Device/getConnectedNetworkType" },
                            { label: "getFreeMemory()", path: "/api2/Device/getFreeMemory" },
                            { label: "getFreeStorageSpace()", path: "/api2/Device/getFreeStorageSpace" },
                            { label: "getMaxMemory()", path: "/api2/Device/getMaxMemory" },
                            { label: "getModelName()", path: "/api2/Device/getModelName" },
                            { label: "getPhoneBrand()", path: "/api2/Device/getPhoneBrand" },
                            { label: "getPhoneModel()", path: "/api2/Device/getPhoneModel" },
                            { label: "getPlugType()", path: "/api2/Device/getPlugType" },
                            { label: "getTotalMemory()", path: "/api2/Device/getTotalMemory" },
                            { label: "getTotalStorageSpace()", path: "/api2/Device/getTotalStorageSpace" },
                            { label: "getWifiName()", path: "/api2/Device/getWifiName" },
                            { label: "isCharging()", path: "/api2/Device/isCharging" },
                            { label: "isPowerSaveMode()", path: "/api2/Device/isPowerSaveMode" },
                            { label: "isScreenOn()", path: "/api2/Device/isScreenOn" },
                            { label: "releaseWakeLock()", path: "/api2/Device/releaseWakeLock" },
                        ]
                    },
                    {
                        label: "Event",
                        path: "/api2/Event",
                        children: [
                            {
                                label: "Activity",
                                path: "/api2/Event/Activity",
                                children: [
                                    { label: "BACK_PRESSED", path: "/api2/Event/Activity/BACK_PRESSED" },
                                    { label: "CREATE", path: "/api2/Event/Activity/CREATE" },
                                    { label: "DESTROY", path: "/api2/Event/Activity/DESTROY" },
                                    { label: "PAUSE", path: "/api2/Event/Activity/PAUSE" },
                                    { label: "RESTART", path: "/api2/Event/Activity/RESTART" },
                                    { label: "RESUME", path: "/api2/Event/Activity/RESUME" },
                                    { label: "START", path: "/api2/Event/Activity/START" },
                                    { label: "STOP", path: "/api2/Event/Activity/STOP" },
                                ]
                            },
                            { label: "BATTERY_LEVEL_CHANGED", path: "/api2/Event/BATTERY_LEVEL_CHANGED" },
                            { label: "COMMAND", path: "/api2/Event/COMMAND" },
                            { label: "MESSAGE", path: "/api2/Event/MESSAGE" },
                            { label: "NOTIFICATION_POSTED", path: "/api2/Event/NOTIFICATION_POSTED" },
                            { label: "NOTIFICATION_REMOVED", path: "/api2/Event/NOTIFICATION_REMOVED" },
                            { label: "START_COMPILE", path: "/api2/Event/START_COMPILE" },
                            { label: "TICK", path: "/api2/Event/TICK" },
                        ]
                    },
                    {
                        label: "FileStream",
                        path: "/api2/FileStream",
                        children: [
                            { label: "append()", path: "/api2/FileStream/append" },
                            { label: "copyFile()", path: "/api2/FileStream/copyFile" },
                            { label: "create()", path: "/api2/FileStream/create" },
                            { label: "createDir()", path: "/api2/FileStream/createDir" },
                            { label: "getSdcardPath()", path: "/api2/FileStream/getSdcardPath" },
                            { label: "moveFile()", path: "/api2/FileStream/moveFile" },
                            { label: "read()", path: "/api2/FileStream/read" },
                            { label: "readJSON()", path: "/api2/FileStream/readJSON" },
                            { label: "remove()", path: "/api2/FileStream/remove" },
                            { label: "save()", path: "/api2/FileStream/save" },
                            { label: "saveJSON()", path: "/api2/FileStream/saveJSON" },
                            { label: "write()", path: "/api2/FileStream/write" },
                            { label: "writeJSON()", path: "/api2/FileStream/writeJSON" },
                        ]
                    },
                    {
                        label: "GlobalLog",
                        path: "/api2/GlobalLog",
                        children: [
                            { label: "clear()", path: "/api2/GlobalLog/clear" },
                            { label: "d()", path: "/api2/GlobalLog/d" },
                            { label: "debug()", path: "/api2/GlobalLog/debug" },
                            { label: "e()", path: "/api2/GlobalLog/e" },
                            { label: "error()", path: "/api2/GlobalLog/error" },
                            { label: "i()", path: "/api2/GlobalLog/i" },
                            { label: "info()", path: "/api2/GlobalLog/info" },
                        ]
                    },
                    {
                        label: "Http",
                        path: "/api2/Http",
                        children: [
                            { label: "request(Object, Function)", path: "/api2/Http/request(Object,Function)" },
                            { label: "request(String, Function)", path: "/api2/Http/request(String,Function)" },
                            { label: "requestSync(Object)", path: "/api2/Http/requestSync(Object)" },
                            { label: "requestSync(String)", path: "/api2/Http/requestSync(String)" },
                        ]
                    },
                    {
                        label: "Log",
                        path: "/api2/Log",
                        children: [
                            { label: "clear()", path: "/api2/Log/clear" },
                            { label: "d()", path: "/api2/Log/d" },
                            { label: "debug()", path: "/api2/Log/debug" },
                            { label: "e()", path: "/api2/Log/e" },
                            { label: "error()", path: "/api2/Log/error" },
                            { label: "i()", path: "/api2/Log/i" },
                            { label: "info()", path: "/api2/Log/info" },
                        ]
                    },
                    {
                        label: "Security",
                        path: "/api2/Security",
                        children: [
                            { label: "aesDecode()", path: "/api2/Security/aesDecode" },
                            { label: "aesEncode()", path: "/api2/Security/aesEncode" },
                            { label: "ariaDecode()", path: "/api2/Security/ariaDecode" },
                            { label: "ariaDecodeRaw()", path: "/api2/Security/ariaDecodeRaw" },
                            { label: "ariaEncode()", path: "/api2/Security/ariaEncode" },
                            { label: "ariaEncodeRaw()", path: "/api2/Security/ariaEncodeRaw" },
                            { label: "base32Decode()", path: "/api2/Security/base32Decode" },
                            { label: "base32Encode()", path: "/api2/Security/base32Encode" },
                            { label: "base64Decode()", path: "/api2/Security/base64Decode" },
                            { label: "base64Encode()", path: "/api2/Security/base64Encode" },
                            { label: "des3Decode()", path: "/api2/Security/des3Decode" },
                            { label: "des3Encode()", path: "/api2/Security/des3Encode" },
                            { label: "desDecode()", path: "/api2/Security/desDecode" },
                            { label: "desEncode()", path: "/api2/Security/desEncode" },
                            { label: "desKey()", path: "/api2/Security/desKey" },
                            { label: "eccDecode()", path: "/api2/Security/eccDecode" },
                            { label: "eccEncode()", path: "/api2/Security/eccEncode" },
                            { label: "getDesKey()", path: "/api2/Security/getDesKey" },
                            { label: "hashCode()", path: "/api2/Security/hashCode" },
                            { label: "md2()", path: "/api2/Security/md2" },
                            { label: "md5()", path: "/api2/Security/md5" },
                            { label: "md55()", path: "/api2/Security/md55" },
                            { label: "rc4Decode()", path: "/api2/Security/rc4Decode" },
                            { label: "rc4Encode()", path: "/api2/Security/rc4Encode" },
                            { label: "seedDecode()", path: "/api2/Security/seedDecode" },
                            { label: "seedEncode()", path: "/api2/Security/seedEncode" },
                            { label: "sha()", path: "/api2/Security/sha" },
                            { label: "sha3_224()", path: "/api2/Security/sha3_224" },
                            { label: "sha3_256()", path: "/api2/Security/sha3_256" },
                            { label: "sha3_384()", path: "/api2/Security/sha3_384" },
                            { label: "sha3_512()", path: "/api2/Security/sha3_512" },
                            { label: "sha256()", path: "/api2/Security/sha256" },
                            { label: "sha384()", path: "/api2/Security/sha384" },
                            { label: "sha512()", path: "/api2/Security/sha512" },
                            { label: "ulid()", path: "/api2/Security/ulid" },
                            { label: "uuid()", path: "/api2/Security/uuid" },
                            { label: "uuidv7()", path: "/api2/Security/uuidv7" },
                        ]
                    },
                    {
                        label: "SessionManager",
                        path: "/api2/SessionManager",
                        children: [
                            { label: "bindSession(String, android.app.Notification.Action?)", path: "/api2/SessionManager/bindSession(String,Action$)" },
                            { label: "bindSession(String, String, android.app.Notification.Action?)", path: "/api2/SessionManager/bindSession(String,String,Action$)" },
                        ]
                    },
                ]
            },
            {
                label: "이벤트",
                children: [
                    { label: "activityBackPressed", path: "/api2/activityBackPressed" },
                    { label: "activityCreate", path: "/api2/activityCreate" },
                    { label: "activityDestroy", path: "/api2/activityDestroy" },
                    { label: "activityPause", path: "/api2/activityPause" },
                    { label: "activityRestart", path: "/api2/activityRestart" },
                    { label: "activityResume", path: "/api2/activityResume" },
                    { label: "activityStart", path: "/api2/activityStart" },
                    { label: "activityStop", path: "/api2/activityStop" },
                    { label: "batteryLevelChanged", path: "/api2/batteryLevelChanged" },
                    { label: "command", path: "/api2/command" },
                    { label: "memberChanged", path: "/api2/memberChanged" },
                    { label: "message", path: "/api2/message" },
                    { label: "notificationPosted", path: "/api2/notificationPosted" },
                    { label: "notificationRemoved", path: "/api2/notificationRemoved" },
                    { label: "startCompile", path: "/api2/startCompile" },
                    { label: "tick", path: "/api2/tick" }
                ]
            },
        ]
    },
    {
        label: "StarLight",
        path: "/starlight"
    },
    {
        label: "기초",
        path: "/basic"
    },
    {
        label: "심화",
        path: "/advanced"
    },
] as const;