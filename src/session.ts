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

class Session {

    private static method = localStorage;

    /**
     * Save new item in session
     *
     * @param key
     * @param data
     * @param persist
     */
    public static save(key: string, data, persist = true) {

        if (typeof data == 'object') {
            data = JSON.stringify(data);
        }

        if (persist) {
            this.method = localStorage;
        } else {
            this.method = sessionStorage;
        }

        this.method.setItem(key, data);
    }

    /**
     * Get Key Session
     *
     * @param key
     * @returns {any}
     */
    public static get(key) {
        let item = this.method.getItem(key);

        if (item != null && typeof item != 'undefined') {
            try {
                return JSON.parse(item);
            } catch (e) {
                return item;
            }
        } else {
            throw Error(`${key} not exists in session.`);
        }
    }

    /**
     * Delete item localStorage
     *
     * @param key
     */
    public static remove(key) {
        this.method.removeItem(key);
    }

    /**
     * Clear session
     *
     * @return void
     */
    public static clear() {
        this.method.clear();
    }
}