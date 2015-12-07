/*
 * Copyright 2015 Bruno de Oliveira Francisco <bruno@salluzweb.com.br>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Session = (function () {
    function Session() {
    }
    Session.save = function (key, data, persist) {
        if (persist === void 0) { persist = true; }
        if (typeof data == 'object') {
            data = JSON.stringify(data);
        }
        if (persist) {
            this.method = localStorage;
        }
        else {
            this.method = sessionStorage;
        }
        this.method.setItem(key, data);
    };
    Session.get = function (key) {
        var item = this.method.getItem(key);
        if (item != null && typeof item != 'undefined') {
            try {
                return JSON.parse(item);
            }
            catch (e) {
                return item;
            }
        }
        else {
            throw Error(key + " not exists in session.");
        }
    };
    Session.remove = function (key) {
        this.method.removeItem(key);
    };
    Session.clear = function () {
        this.method.clear();
    };
    Session.method = localStorage;
    return Session;
})();
//# sourceMappingURL=session.js.map